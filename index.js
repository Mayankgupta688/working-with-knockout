var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: 123
};

ko.applyBindings(myViewModel);

function changeData() {
    myViewModel.personName("Anshul");
}

myViewModel.personName.subscribe(function(newValue) {
    console.log("New Value is: " + newValue);
});

ko.when(function() {
    return myViewModel.personName() == "Anshul";
}, function() {
    console.log("Value Changed to Anshul")
})

