import { Account, Client, Databases } from "appwrite"

const appwriteEndpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
const appwriteProject = process.env.NEXT_PUBLIC_APPWRITE_PROJECT
if (!appwriteEndpoint) {
    throw new Error("Appwrite Endpoint not set")
}
if (!appwriteProject) {
    throw new Error("Appwrite Project Not Set")
}

const client = new Client()

client.setEndpoint(appwriteEndpoint).setProject(appwriteProject)

const account = new Account(client)
const database = new Databases(client)

export default client
export { account, database }
