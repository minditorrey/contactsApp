'use strict';

$(document).ready(init);

function init() {
	$('.save-it').click(addContact);
	renderList();
	$('.delete').click(removeContact);
}

function addContact () {
	var photo = $('#form_photo').val();
	
	var name = $('#form_name').val();
	var address = $('#form_address').val();
	var email = $('#form_email').val();
	var phone = $('#form_phone').val();
	var newContact = {
		photo : photo,
		name: name,
		address: address,
		email: email,
		phone: phone
	};

	var $img = $('<img>').attr('src', photo);
	var newRow = $('.rowTemplate').clone().removeClass('rowTemplate');
	var newName = newRow.children('#info-name').text(name);
	var newPhoto = newRow.children('#info-photo').append($img);
	var newAddress = newRow.children('#info-address').text(address);
	var newEmail = newRow.children('#info-email').text(email);
	var newPhone = newRow.children('#info-phone').text(phone);

	$('.table').append(newRow);

	$('.clear').val('');

	var contacts = ContactStorage.get();
	contacts.push(newContact);
	ContactStorage.write(contacts);
	
}

var ContactStorage = {
	get: function() {
		try {
			var contactList = JSON.parse(localStorage.contactList);
		} catch(err) {
			var contactList = [];
		}
		return contactList;
	},
	write: function(contacts) {
		localStorage.contactList = JSON.stringify(contacts);
	}


};

function renderList() {

	var contacts = ContactStorage.get(); 

	//iterate over each index of the contact and then append to the table.
	for(var i = 0; i < contacts.length; i++) {
		var photo = contacts[i].photo;
		var name = contacts[i].name;
		var address = contacts[i].address;
		var email = contacts[i].email;
		var phone = contacts[i].phone;
	
		// var photo = $('#form_photo').val();
		
		var newRow = $('.rowTemplate').clone().removeClass('rowTemplate');
		var $img = $('<img>').attr('src', photo);
		var newName = newRow.children('#info-name').text(name);
		var newPhoto = newRow.children('#info-photo').append($img);
		var newAddress = newRow.children('#info-address').text(address);
		var newEmail = newRow.children('#info-email').text(email);
		var newPhone = newRow.children('#info-phone').text(phone);
		$('.table').append(newRow);
		$('.clear').val('');	
	}
}

function removeContact() {
	var contacts = ContactStorage.get();
	var index = $(this).parent().index();
	// $(this).remove();
	contacts.splice(index, 1); ///splice removes this one contact
	ContactStorage.write(contacts);
	location.reload();
	renderList();
	
	console.log(index);
}

function editContact() {

}















