import React from 'react'
import { UIData } from '../dataset/UIData.js'

export default function SideBar() {
    const listItems = UIData.map(item =>
        <li>{item.name}</li>
        );
        
    return <ul>{listItems}</ul>;
    

        

        
/*                <div class="flex flex-col text-sm">
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                        <span class="font-semibold">Trang chủ</span>

                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                        <span>Shorts</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                        <span>Kênh đăng ký</span>
                    </a>
                    
                    
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                        <span>Thư viện</span>
                    </a>
                    
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                            <span>Video đã xem</span>
                    </a>
                    
                    
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                            <span>Video của bạn</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                            <span>Xem sau</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                            <span>Video đã thích</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <div></div>
                            <span>Thêm</span>
                    </a>
                    


                    <h3 class="pl-3 text-base">Kênh đăng ký</h3>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Web Dev Simplify</span>
                        <span class="rounded-full bg-black"></span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Tennis TV</span>
                        <span class="dot"></span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Midbeast</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Top Tennis Training</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Hoàng Dũng</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Essential Tennis</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Programming with Mosh</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Hiển thị thêm 63 mục</span>
                    </a>
                    
                    <h3 class="pl-3 text-base">Khám phá</h3>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Thịnh hành</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Âm nhạc</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Trò chơi</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Tin tức</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Thể thao</span>
                    </a>
                    
                    <h3 class="pl-3 text-base">Dịch vụ khác của YouTube</h3>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>YouTube Premium</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>YouTube Studio</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>YouTube Music</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>YouTube Kids</span>
                    </a>
                    
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Cài đặt</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Nhật ký báo cáo</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Trợ giúp</span>
                    </a>
                    <a class="flex pl-3 pr-3 w-[204px] h-10 items-center">
                        <i></i>
                        <span>Gửi ý kiến phản hồi</span>
                    </a>
                    
                    <div class="pl-3 text-gray-400 flex flex-wrap">
                        <p class="pr-2">Giới thiệu</p>
                        <p class="pr-2">Báo chí</p>
                        <p class="pr-2">Bản quyền</p>
                        <p class="pr-2">Liên hệ với chúng tôi</p>
                        <p class="pr-2">Người sáng tạo</p>
                        <p class="pr-2">Quảng cáo</p>
                        <p class="pr-2 whitespace-break-spaces ...">Nhà phát triển</p>

                        <p class="pr-2">Điều khoản</p>
                        <p class="pr-2">Quyền riêng tư</p>
                        <p class="pr-2">Chính sách và an toàn</p>
                        <p class="pr-2">Cách YouTube hoạt động</p>
                        <p class="pr-2">Thử các tính năng mới</p>

                        <p class="pr-2">© 2023 Google LLC</p>
                    </div>
              </div>*/


            
  
 /* <div class="side-bar w-60 p-3 ">
  </div>*/
}

