import { defineStore } from 'pinia';

export interface Tag {
  id: string | number, text: string
}

export interface Account {
  id: string | number;
  login: string;
  password: string | null;
  recordType: string;
  tags: Tag[];
}


interface AccountState {
  accounts: Account[];
  showAccountForm: boolean;
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
    saveToLocaleStorage(): void {
      localStorage.setItem("accounts", JSON.stringify(this.accounts))
    },
    addNewAccount(accountData: Account): void {
      this.accounts.push(accountData)
      this.saveToLocaleStorage()
    },
    getAccountsFroStorage(): void {
      const accountData = localStorage.getItem("accounts")
      if (accountData) {
        const accountArray = JSON.parse(accountData)
        this.accounts = accountArray
      } else {
        this.saveToLocaleStorage()
      }
    },
    deleteAccount(account: Account): void {
      this.accounts = this.accounts.filter(item => item.id !== account.id)
      this.saveToLocaleStorage()
    }
  }
});
