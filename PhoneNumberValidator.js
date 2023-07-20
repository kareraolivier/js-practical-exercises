const PhoneNumberValidator=(phone)=>{

 if(((phone.indexOf('-')===3&&phone.lastIndexOf('-')===7)||(phone.indexOf(' ')===3&&phone.lastIndexOf(' ')===7))&&((phone.replaceAll(' ', '').length===10)||(phone.replaceAll('-', '').length===10)))
   return true
 else return false;

}
console.log(PhoneNumberValidator("123 456 9840"))