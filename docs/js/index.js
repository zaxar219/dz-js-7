const trElementTemplate =`
	<tr class="bid-row">
		<td scope="row">
			<a href="view-and-edit.html?id=%ID%">Заявка №%ID%</a>
		</td>
		<td>%CLIENT_NAME%</td>
		<td>
			<span class="badge badge-light badge-lg">
				<span class="icon">🛴</span> %GOOD%
			</span>
		</td>
		<td>%PRICE%</td>
		<td><span class="badge badge-primary">Новая</span></td>
	  <td><span class="badge badge-secondary">Нет оплаты</span></td>
	</tr>`


main()

function main () {
	const url = 'http://89.108.64.67:3000'
	const key = '?key=adlfja8989we8rfjoaww3003f98'
	const address = '/orders'

// const newOrder = JSON.stringify({
	// 	good: "пицца",
	// 	price: 30000,
	// 	clientName: "Сергей",
	// 	managerName: "Владимир",
	// 	paymentStatus: 0,
	// 	requestStatus: 0
	// })

	fetch(url + address + key, {
		method: 'GET',
		// body: newOrder
	})
		.then(answer => answer.json())
		.then(data => {
			const rootDir = document.getElementById('listViewer')

			for (const item of data) {
				const tbodyElement = document.createElement('tbody')
			
				tbodyElement.innerHTML = trElementTemplate
					.replace('%ID%', item.id)
					.replace('%ID%', item.id)
					.replace('%GOOD%', item.good)
					.replace('%PRICE%', item.price)
					.replace('%CLIENT_NAME%', item.clientName)

				rootDir.append(tbodyElement.firstElementChild)
			}

			
		})
}






// Получить все заказы
// GET /orders

// Получить заказ по ID
// GET /order/:id

// Создать новый заказ
// POST /order body

// Изменить заказ
// PUT /order/:id body

// Удалить заказ
// DELETE /order/:id

// Сброс базы даных
// POST /reinit