#### 遇到的问题

- 判断文章是什么标签分类，当文章没有标签时，后台接口数据返回的标签类型为undefined导致页面渲染出错

```javascript

    /*data为后台返回数据，解构出需要的数据
    good和top类型为布尔值
    tab数据为string没有时我undefined*/
    let {author,id,last_reply_at,tab,good,top} = data 

    Sort tab={top?"top":(good?"good":tab))}/> //错误写法 当top,good为false，tab为undefined时，组件会拿到undefined不渲染页面出错
    Sort tab={top?"top":(good?"good":((tab===undefined)?"other":tab))}/>   //分类标签判断改正

    //分类标签组件函数
    function setSort(tab){  //判断父组件传过来的分类标签然后返回给定的dom节点
        switch(tab){
            case "good":
                return <Tag color="#f50" style={{textalign:"center"}}>精华</Tag>
            case "top":
                return <Tag color="#80bd01" style={{textalign:"center"}}>置顶</Tag>
            case "share":
                return <Tag color="#e5e5e5" style={{textalign:"center"}}>分享</Tag>
            case "ask":
                return <Tag color="#e5e5e5" style={{textalign:"center"}}>问答</Tag>
            case "job":
                return <Tag color="#e5e5e5" style={{textalign:"center"}}>招聘</Tag>
            case "dev":
                return <Tag color="#e5e5e5" style={{textalign:"center"}}>测试</Tag>
            case "other":
                return (<div></div>)
        }

    }

    function Sort(props){
        // console.log(props)   //接受父组件的分类标签
        let {tab} = props;
            console.log("子导航"+tab) 
            return setSort(tab)
        }
    }
```