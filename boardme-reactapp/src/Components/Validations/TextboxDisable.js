$('#selectGroup').change(function () {
  $('#Select_Font, #Enter_Text').prop('disabled', this.value.length);
});