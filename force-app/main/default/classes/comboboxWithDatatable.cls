public with sharing class comboboxWithDatatable {
    // This method will return all account to LWC
    @AuraEnabled
    public static List<Account> getAccountNames(){
        List<Account> accountList = [Select Id,Name from Account];
       return accountList;
    }
}
