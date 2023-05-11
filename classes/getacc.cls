public with sharing class getacc {
   @AuraEnabled(cacheable=true)
   public static list<Account> accget(){
    list<Account>  acc = [select id,Name from Account limit 10];
    return acc;
   }
    
}