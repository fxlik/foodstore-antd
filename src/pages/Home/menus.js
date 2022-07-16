import {
    DesktopOutlined,
    InsuranceOutlined,
    ExperimentOutlined,
    PieChartOutlined,
    NumberOutlined
} from '@ant-design/icons'

function getItem(label, key, icon, children, type) {
    return {
        key, icon, children, label, type
    }
}

const items = [
    getItem('Semua', '1', <PieChartOutlined />),
    getItem('Utama', '2', <NumberOutlined />),
    getItem('Minuman', '3', <ExperimentOutlined />),
    getItem('Snack', '4', <InsuranceOutlined />),
    getItem('Pastry', '5', <DesktopOutlined />)
]

export default items