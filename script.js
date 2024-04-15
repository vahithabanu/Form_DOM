document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const pincode = document.getElementById('pincode').value;
    const address = document.getElementById('address').value;
    const foods = document.querySelectorAll('input[name="food"]:checked');
    const foodValues = Array.from(foods).map(food => food.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Create table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodValues.join(', ')}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Append row to table
    document.getElementById('tableBody').appendChild(newRow);

    // Clear form fields
    document.getElementById('myForm').reset();
});

// Test suite
describe('Form and Table Test Suite', () => {
    it('should add a new row to the table on form submission', () => {
        // Simulate form submission
        document.getElementById('firstName').value = 'John';
        document.getElementById('lastName').value = 'Doe';
        document.getElementById('gender').value = 'male';
        document.getElementById('pincode').value = '12345';
        document.getElementById('address').value = '123 Street, City';
        document.getElementById('food1').checked = true;
        document.getElementById('food2').checked = true;
        document.getElementById('state').value = 'State';
        document.getElementById('country').value = 'Country';

        document.getElementById('myForm').dispatchEvent(new Event('submit'));

        // Check if the row was added to the table
        const tableRows = document.querySelectorAll('#tableBody tr');
        const lastRow = tableRows[tableRows.length - 1];
        const cells = lastRow.querySelectorAll('td');
        expect(cells[0].textContent).toEqual('John');
        expect(cells[1].textContent).toEqual('Doe');
        expect(cells[4].textContent).toEqual('male');
        expect(cells[5].textContent).toContain('Pizza');
        expect(cells[5].textContent).toContain('Burger');
        expect(cells[6].textContent).toEqual('State');
        expect(cells[7].textContent).toEqual('Country');
    });
});