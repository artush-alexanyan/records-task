import { defineStore } from 'pinia';

interface AccountState {
  accounts: object[],
  showAccountForm: boolean
}

export const useAccountStore = defineStore('AccountStore', {
  state: (): AccountState => ({
    accounts: [],
    showAccountForm: false
  }),
actions: {
  openNewAccountForm (): void {
    this.showAccountForm = true
  },
  closeNewAccountForm (): void {
    this.showAccountForm = false
  },
  addNewAccount (accountData: object): void {
    this.accounts.push(accountData)
  }
}
});
