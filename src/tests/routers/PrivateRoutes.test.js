import {shallow} from 'enzyme'
import { PrivateRoutes } from '../../routers/PrivateRoutes'

describe('Pruebas en <PrivateRoutes />', () => {
    test('debe de mostrat el componente si está autenticado y guardar en el localStorage', () => {
        const wrapper = shallow(<PrivateRoutes/>)
    })
    
})
