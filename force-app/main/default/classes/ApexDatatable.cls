public with sharing class ApexDatatable {
    public ApexDatatable() {


    }
    @AuraEnabled
    public static List<account> getData(String str){
        try{
            String name='%'+str+'%';
            return [SELECT Id,Name from Account where name like :name];
        } catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}
