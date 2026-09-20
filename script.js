// 模拟数据列表，可以自己再加更多条目
const dataList = [
    {title:"HTML基础", desc:"HTML用来搭建网页结构，各种标签组成页面"},
    {title:"CSS样式", desc:"CSS负责美化页面，设置颜色、布局、大小"},
    {title:"JavaScript", desc:"JS实现网页交互，点击、搜索、动态修改内容"},
    {title:"Git版本控制", desc:"Git用于代码管理，可以提交代码到GitHub仓库"},
    {title:"Vercel部署", desc:"Vercel可以把前端网页在线发布，生成网址"}
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultArea = document.getElementById('resultArea');

// 搜索函数
function searchData(keyword){
    resultArea.innerHTML = "";
    if(!keyword.trim()){
        resultArea.innerHTML = `<div class="empty">请输入搜索关键词</div>`;
        return;
    }
    // 过滤：标题或描述包含关键词
    const filterResult = dataList.filter(item=>{
        return item.title.includes(keyword) || item.desc.includes(keyword);
    })

    if(filterResult.length === 0){
        resultArea.innerHTML = `<div class="empty">没有找到匹配内容</div>`;
        return;
    }
    // 渲染结果
    filterResult.forEach(item=>{
        const div = document.createElement('div');
        div.className = "item";
        div.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p >`;
        resultArea.appendChild(div);
    })
}

// 点击搜索按钮
searchBtn.addEventListener('click',()=>{
    searchData(searchInput.value);
})
// 回车也可以搜索
searchInput.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        searchData(searchInput.value);
    }
})