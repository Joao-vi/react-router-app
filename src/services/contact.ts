import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export type TContact = {
  id: string;
  createdAt: number;
  first?: string;
  last?: string;
  nickname?: string;
  notes?: string;
  favorite: boolean;
  avatar?: string;
  twitter?: string;
  isOwner?: boolean;
};

export const OWNER: TContact = {
  id: "owner",
  createdAt: 123141,
  avatar: "",
  first: "João",
  last: "",
  twitter: "@joao",
  notes:
    "Hey there! This project was made to improve my knowledge about client side navigation!\n\nI'm using React Router DOM library to manage client side navigation.",
  isOwner: true,
  favorite: false,
};

const dbContacts = () => localforage.getItem<TContact[]>("contacts");

export async function getContacts(query = "") {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = (await dbContacts()) || [];

  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now(), favorite: false, isOwner: false };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string) {
  if (id === "owner") return OWNER;
  await fakeNetwork(`contact:${id}`);

  let contacts = (await dbContacts()) || [];
  let contact = contacts.find((contact) => contact.id === id);

  return contact ?? null;
}

export async function updateContact(
  id: string,
  updates: Omit<TContact, "id" | "createdAt">
) {
  await fakeNetwork();

  let contacts = (await dbContacts()) || [];
  let contact = contacts.find((contact) => contact.id === id);

  if (!contact) throw new Error(`Not contact was found for id: ${id}`);

  Object.assign(contact, updates);
  await set(contacts);

  return contact;
}

export async function deleteContact(id: string) {
  let contacts = (await dbContacts()) || [];
  let index = contacts.findIndex((contact) => contact.id === id);

  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);

    return true;
  }
  return false;
}

function set(contacts: TContact[]) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: Record<string, any> = {};

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  }

  if (key) {
    if (fakeCache[key]) return;

    fakeCache[key] = true;
  }

  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
