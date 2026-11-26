import './SellerBadge.css'


const STATUS_STYLE = {
        PENDING: {className: "status-pending"},
        APPROVED: {className: "status-approved"},
        SUSPENDED: {className: "status-suspended"},
        BANNED: {className: "status-banned"}
}

export default function SellerBadge({badge}){

    const style = STATUS_STYLE[badge];

    if(!style){
        return <span className='status-badge'>{badge}</span>
    }
    return <span className={`status-badge ${style.className}`}>{badge}</span>
}