fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        const tableBody = document.querySelector('#productTable tbody');
        json.forEach(product => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td>${product.category}</td>
                <td><img src="${product.image}" alt="${product.title}" style="width: 100px;"></td>
            `;
        });
    })
    .catch(error => console.error('Error:', error));
