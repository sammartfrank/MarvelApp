
import React, { Component }  from 'react'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications'

class Notif extends Component {
	createNotification = ( type ) => {
		return () => {
			switch ( type ) {
				case 'success':
					NotificationManager.success('El item ha sido agregado','Exito');
					break;
				case 'info':
					NotificationManager.info('The item selected has been erased')
					break;
			}
		}
	}

render() {
	return (
			<div>
        		<NotificationContainer />
        	</div>
		)
}
}
export default Notif;