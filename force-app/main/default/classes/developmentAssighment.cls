public with sharing class developmentAssighment {
    public static List<Account> getAllDetails(){
        List<Contact> allAccount = [SELECT FIELDS(ALL) FROM Account limit 200];

        
    }
}
