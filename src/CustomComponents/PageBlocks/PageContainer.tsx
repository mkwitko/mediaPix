import { twMerge } from 'tailwind-merge'

export default function PageContainer({
	children,
	className = '',
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={twMerge(
				'mx-auto my-6 flex w-full max-w-[1920px] flex-col items-start justify-end overflow-hidden px-4 md:my-12 lg:px-[6rem]',
				className,
			)}
		>
			{children}
		</div>
	)
}
