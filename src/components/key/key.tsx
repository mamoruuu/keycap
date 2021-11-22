import React from 'react'
import './key.css'

interface IProps {
	label?: string
	id: string
	mod?: string
	offsetRight?: number | null
}

export const Key: React.FC<IProps> = ({ label = '', id, mod, offsetRight = null }) => {
	const styles = { '--key-offset-ratio': offsetRight } as React.CSSProperties;
	return <div id={`key_${id}`} style={styles} className={`key ${mod ? `key_${mod}` : ''}`}>
		{label}
	</div>
}
