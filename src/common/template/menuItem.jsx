import React from 'react'
import { Link } from 'react-router'

export default props => (
    <li>
        <Link href={props.path}>
            <i className={`fa fa-${props.icon}`}/> <span>{props.label}</span>
        </Link>
    </li>
)