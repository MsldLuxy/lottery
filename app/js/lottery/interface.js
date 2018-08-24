import $ from 'jquery';

class Interface{

    //getOmit  获取遗漏数据
    //issue为期号
    getOmit(issue){
        let self = this;
        //箭头函数的this指向是在它定义的时候，而不是运行的时候
        return new Promise((resolve, reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue: issue
                },
                dataType:'json',
                success:(res)=>{
                    self.setOmit(res.data);
                    resolve.call(self,res);
                },
                error:(err)=>{
                    reject.call(err);
                }
            })
        })
    }

    /**
     * 获取开奖号码
     */

    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue,
                },
                dataType:'json',
                success:(res)=>{
                    self.setOpenCode(res.data)
                    resolve.call(self,res);
                },
                error:(err)=>{
                    reject.call(err);
                }

            })
        })
    }

    /**
     * 获取当前状态
     */

    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue,
                },
                dataType:'json',
                success:(res)=>{
                    resolve.call(self,res);
                },
                error:(err)=>{
                    reject.call(err);
                }
            })
        })
    }
}

export default Interface
