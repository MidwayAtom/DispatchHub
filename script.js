document.addEventListener('DOMContentLoaded', function () {
    const dataForm = document.getElementById('data-form');
    const dataList = document.getElementById('data-list');

    dataForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const inputData = document.getElementById('input-data').value;
        
        // Add the submitted data to the list on the page
        const newItem = document.createElement('div');
        newItem.textContent = inputData;
        dataList.appendChild(newItem);
        
        // Clear the input field
        document.getElementById('input-data').value = '';
    });
});
