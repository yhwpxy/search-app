// 大量测试数据，随便搜索都能命中
const dataList = [
    {title:"HTML基础", desc:"HTML用来搭建网页结构，由各种标签组成，是网页最基础的语言"},
    {title:"CSS样式", desc:"CSS负责美化页面，设置颜色、布局、大小、圆角、阴影等视觉效果"},
    {title:"JavaScript", desc:"JS实现网页交互逻辑，可以绑定点击事件、操作DOM、动态修改页面内容"},
    {title:"Git版本控制", desc:"Git用于代码版本管理，可以保存代码记录，提交代码到远程GitHub仓库"},
    {title:"Vercel部署", desc:"Vercel可以把前端网页直接在线发布，自动构建并生成公开访问网址"},
    {title:"DOM操作", desc:"DOM是文档对象模型，JS可以读取、修改、删除页面上的HTML元素"},
    {title:"前端开发", desc:"前端开发主要包含HTML、CSS、JavaScript三大基础技术栈"},
    {title:"浏览器调试", desc:"浏览器F12开发者工具，可以调试JS代码、查看页面样式、排查报错"},
    {title:"响应式布局", desc:"响应式布局让网页在手机、电脑不同尺寸屏幕都能正常展示"},
    {title:"VSCode编辑器", desc:"VSCode是前端常用代码编辑器，支持插件扩展，方便编写网页代码"}
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultArea = document.getElementById('resultArea');
const infoEl = document.getElementById('info');

// 关键词高亮函数
function highlightText(text, keyword){
    const reg = new RegExp(`(${keyword})`, 'gi');
    return text.replace(reg, `<span class="highlight">$1</span>`);
}

// 搜索主函数
function searchData(keyword){
    resultArea.innerHTML = "";
    infoEl.textContent = "";

    if(!keyword.trim()){
        resultArea.innerHTML = `<div class="empty">请输入搜索关键词</div>`;
        return;
    }

    // 模糊过滤，不区分大小写
    const filterResult = dataList.filter(item=>{
        const lowerTitle = item.title.toLowerCase();
        const lowerDesc = item.desc.toLowerCase();
        const lowerKey = keyword.toLowerCase();
        return lowerTitle.includes(lowerKey) || lowerDesc.includes(lowerKey);
    })

    infoEl.textContent = `✅ 共找到 ${filterResult.length} 条匹配结果`;

    if(filterResult.length === 0){
        resultArea.innerHTML = `<div class="empty">没有找到匹配内容，请更换关键词</div>`;
        return;
    }

    // 渲染结果+高亮关键词
    filterResult.forEach(item=>{
        const div = document.createElement('div');
        div.className = "item";
        const titleHtml = highlightText(item.title, keyword);
        const descHtml = highlightText(item.desc, keyword);
        div.innerHTML = `<h3>${titleHtml}</h3><p>${descHtml}</p >`;
        resultArea.appendChild(div);
    })
}

// 点击搜索按钮
searchBtn.addEventListener('click',()=>{
    searchData(searchInput.value);
})

// 按下回车搜索
searchInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        searchData(searchInput.value);
    }
})