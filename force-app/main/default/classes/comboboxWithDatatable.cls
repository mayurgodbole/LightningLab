public with sharing class comboboxWithDatatable {
    // This method will return all account to LWC
    @AuraEnabled
    public static List<Account> getAccountNames(){
        List<Account> accountList = [Select Id,Name from Account];
       return accountList;
    }
    //This method will return all contacts related with perticular account
    @AuraEnabled
    public static List<Contact> getContacts(string selectedAccountId){
        List<Contact> contactList = [Select Id,Name,Email, AccountId From Contact Where AccountId=: selectedAccountId];
        return contactList;
    }
}
