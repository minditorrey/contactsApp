'use strict';


$(document).ready(init);

function init() {
	$('.btn-send').click(addContact);
	
	
}

function addContact () {
	var photo = $('#form_photo').val();
	var $img = $('<img>').attr('src', photo);
	var name = $('#form_name').val();
	var address = $('#form_address').val();
	var email = $('#form_email').val();
	var phone = $('#form_phone').val();
	var newRow = $('.rowTemplate').clone().removeClass();
	var newName = newRow.children('#info-name').text(name);
	var newPhoto = newRow.children('#info-photo').append($img);
	var newAddress = newRow.children('#info-address').text(address);
	var newEmail = newRow.children('#info-email').text(email);
	var newPhone = newRow.children('#info-phone').text(phone);
	console.log(newRow);
	$('.table').append(newRow);
	$('.clear').val('');
	
}















