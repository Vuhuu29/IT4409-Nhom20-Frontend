

export default function NarBar() {
    const  logoutHandle = async () => {
        await localStorage.removeItem("token")
        await localStorage.removeItem("UserRole")
        await localStorage.removeItem("UserId")
    }
    
    return (
        <div className="container" style={{position: "fixed", left: 0, top: 0, maxWidth: "100%", zIndex: 1}}>
            <nav className="navbar navbar-expand-lg navbar-light px-4 mt-1" style={{boxSizing: 'border-box', backgroundColor: '#fff', borderRadius: 5, boxShadow: '0px 5px 20px -17px rgba(0, 0, 0, 0.34)'}}>

                <img src='./logo.svg' style={{height: 40}}/>
                <ul className="navbar-nav ms-auto">
                    <li className= "nav-item active">
                        <a href="/" className="nav-link navbar-text" >Trang chủ</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="rentinghouse" className="nav-link dropdown-toggle navbar-text">Khu trọ</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="rentinghouse">Khu trọ</a></li>
                            <li><a className="dropdown-item" href="rentingroom">Phòng trọ</a></li>
                            <li><a className="dropdown-item" href="services">Dịch vụ</a></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a href="convenant" className="nav-link dropdown-toggle navbar-text">Hợp đồng</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="covenant">Hợp đồng</a></li>
                            <li><a className="dropdown-item" href="deposit">Đặt cọc</a></li>
                            <li><a className="dropdown-item" href="renter">Khách thuê</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="bill" className="nav-link navbar-text">Hóa đơn</a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="account" className="nav-link navbar-text">Hồ sơ</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link navbar-text" onClick={() => logoutHandle()}> Đăng xuất </a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}