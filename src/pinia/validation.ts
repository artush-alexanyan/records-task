import { defineStore } from "pinia";

export const useValidationStore = defineStore('ValidationStore', {
  actions: {
    validateLength(field: string, value: string | number, min: number, max: number): string | null {
      const valueToString = value.toString();
      if (valueToString.length < min || valueToString.length > max) {
        return `Поле "${field}" должно содержать от ${min} до ${max} символов`;
      }
      return null;
    },

    validateSelect(value: string): string | null {
      return value ? null : "Поле \"Тип записи\" обязательно для выбора";
    },

    validateTagLength(value: string, max: number): string | null {
      return value.length > max ? "Длина метки не должна превышать 50 символов" : null;
    },

    validateLogin(login: string | number): string | null {
      return this.validateLength("Логин", login, 6, 100);
    },

    validatePassword(password: string | number): string | null {
      return this.validateLength("Пароль", password, 6, 100);
    },

    validateRecordType(recordType: string): string | null {
      return this.validateSelect(recordType);
    },
    validateTag(tag: string): string | null {
      return this.validateTagLength(tag, 50)
    }
  }
});
