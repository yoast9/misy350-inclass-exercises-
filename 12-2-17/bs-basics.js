function main () {
  $('#success-button').click(function (){
    $('#exampleModal').modal('show');
  });
}
//ready makes sure code only runs when html page is fully loaded
(document).ready(main);
