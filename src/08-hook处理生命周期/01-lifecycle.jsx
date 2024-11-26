class BlogView extends React.Component {
  // ...
  componentDidMount() {
    // 组件第一次加载时去获取 Blog 数据
    fetchBlog(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      // 当 Blog 的 id 发生变化时去获取博客文章
      fetchBlog(this.props.id);
    }
  }
  // ...
}

function BlogView({ id }) {
  useEffect(() => {
    // 当 id 变化时重新获取博客文章
    fetchBlog(id);
  }, [id]); // 定义了依赖项 id
}

//在函数组件中你要思考的方式永远是：当某个状态发生变化时，我要做什么，而不再是在 Class 组件中的某个生命周期方法中我要做什么。


import { useRef } from 'react';

// 创建一个自定义 Hook 用于执行一次性代码
function useSingleton(callback) {
  // 用一个 called ref 标记 callback 是否执行过
  const called = useRef(false);
  // 如果已经执行过，则直接返回
  if (called.current) return;
  // 第一次调用时直接执行
  callBack();
  // 设置标记为已执行过
  called.current = true;
}

import useSingleton from './useSingleton';

const MyComp = () => {
  // 使用自定义 Hook
  useSingleton(() => {
    console.log('这段代码只执行一次');
  });

  return (
    <div>My Component</div>
  );
};



useEffect(() => {
  // componentDidMount + componentDidUpdate
  console.log('这里基本等价于 componentDidMount + componentDidUpdate');
  return () => {
    // componentWillUnmount
    console.log('这里基本等价于 componentWillUnmount');
  }
}, [deps])



import React, { useEffect } from 'react';
import comments from './comments';

function BlogView({ id }) {
  const handleCommentsChange = useCallback(() => {
    // 处理评论变化的通知
  }, []);
  useEffect(() => {
    // 获取博客内容
    fetchBlog(id);
    // 监听指定 id 的博客文章的评论变化通知
    const listener = comments.addListener(id, handleCommentsChange);
    
    return () => {
      // 当 id 发生变化时，移除之前的监听
      comments.removeListener(listener);
    };
  }, [id, handleCommentsChange])
}