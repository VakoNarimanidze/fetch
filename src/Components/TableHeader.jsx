import './TableHeader.css'

export default function TableHeader() {
    return (
        <div className="after">
            <tr>
                <th>Customer Name</th>
                <th className='secondTh'>Company</th>
                <th className='thirdTh'>Phone Number</th>
                <th className='forthTh'>Email</th>
                <th className='lastTh'>Street</th>
        </tr>
        </div>

    )
}