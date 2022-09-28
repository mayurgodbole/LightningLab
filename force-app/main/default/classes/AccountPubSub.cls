public with sharing class AccountPubSub {
    public AccountPubSub() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountInfo(){
        return [SELECT Name, Type, Phone, Website from Account limit 10];
    }

    @AuraEnabled
    public static Account getAccountValues(String accountIdValue){
        if(accountIDValue!=''){
            return [SELECT Name,Type,Phone, Website from Account limit 10];
        }
        else{
            return null;
        }

       
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getActiveAccountInfo(){
        return [SELECT Name, Type, Phone, Website,Active__c from Account where Active__c='Yes' limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getInActiveAccountInfo(){
        return [SELECT Name, Type, Phone, Website,Active__c from Account where Active__c='No' limit 10];
    }
}
