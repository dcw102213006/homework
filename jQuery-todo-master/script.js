var App=(function(){
    function _bindEvent(){
        console.log('bind event');
        $('#btn-addTask').on('click',_handleAddTask);//對按鈕設定click監聽,執行_handleAddTask
        $('#taskContainer').on('click','.taskItem .btn-delTask',_handleDelTask);//對X設定click監聽,執行_handleDelTask
    
    }
    function _handleDelTask(){
        console.log('del btn clicked');
        $(this).parents('.taskItem').remove();//移除 被按的X的 祖先節點裡 有 class=taskItem  的東西
    }
    function _handleAddTask(){
        console.log('button clicked');
        var taskName=$('#input-taskName').val();//取得框框內的值
        var taskDesc=$('#input-taskDesc').val();//取得框框內的值
        $('#taskContainer').append(//移動節點(代辦事項框框)到  id=taskContainer的東西的裡面
           `<div class="col col-md-12">
				<div id="taskContainer"  class="row">
					<div class="col-sm-4 taskItem">
						<div class="card">
							<div class="card-block">
								<button type="button" class="close btn-delTask" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h3 class="card-title">${taskName}</h3>
								<p class="card-text">${taskDesc}</p>
							</div>
						</div>
					</div> 
				</div>
			</div>`);
        $('#input-taskName').val('');//清空taskName框框內文字
        $('#input-taskDesc').val('');//清空taskDesc框框內文字
    }
    function init(){
        console.log('init');
        _bindEvent();
    
    }
    return {
        init
    }


})();
