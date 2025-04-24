import { defineStore } from 'pinia';

export interface Tag {
  id: string | number, text: string
}
export interface RecordType {
  id: string | number, text: string
}
export interface Account {
  id: string | number,
  login: string | number,
  password: string | number,
  recordType: RecordType,
  tags: Tag[]
}

interface AccountState {
  accounts: Account[],
  showAccountForm: boolean
}

export const useAccountStore = defineStore('AccountStore', {
  state: (): AccountState => ({
    accounts: [],
    showAccountForm: false
  }),
  actions: {
    openNewAccountForm(): void {
      this.showAccountForm = true
    },
    closeNewAccountForm(): void {
      this.showAccountForm = false
    },
    addNewAccount(accountData: Account): void {
      this.accounts.push(accountData)
      localStorage.setItem("accounts", JSON.stringify(this.accounts))
    },
    getAccountsFroStorage(): void {
      const accountData = localStorage.getItem("accounts")
      if (accountData) {
        const accountArray = JSON.parse(accountData)
        console.log("Accounts:", accountArray);
        this.accounts = accountArray
      } else {
        localStorage.setItem("accounts", JSON.stringify(this.accounts))
      }
    }
  }
});
