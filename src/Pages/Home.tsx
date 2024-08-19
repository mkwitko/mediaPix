import { useState } from 'react'
import QRCode from 'react-qr-code'
import { v4 as uuidv4 } from 'uuid'

export default function Home() {
	const [value, setValue] = useState<any>()

	return (
		<div className="flex flex-col">
			<button
				onClick={() => {
					setValue({
						user: 'fulano',
						uuid: uuidv4(),
						type: 'qrCode',
					})
				}}
				className="bg-red-800 text-white p-4 rounded-[0.625rem]"
				type="button"
			>
				Gerar qr code
			</button>

			{value && (
				<QRCode
					size={256}
					style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
					value={value}
					viewBox={`0 0 256 256`}
				/>
			)}
		</div>
	)
}
