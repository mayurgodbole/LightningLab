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
}
