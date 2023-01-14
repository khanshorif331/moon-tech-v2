import { removeProduct } from '../../actions/productAction'

const deleteProduct = id => {
	return async (dispatch, getState) => {
		const res = await fetch(
			`https://moontech-server.vercel.app/product/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)
		const data = await res.json()

		if (data.acknowledged) {
			dispatch(removeProduct(id))
		}
	}
}

export default deleteProduct
