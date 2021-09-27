// Toast function
const succeed = document.getElementByClass('btn--succeed'),
const error = document.getElementByClass('btn--error')

function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000,
}) {
    const main = document.getElementById('toast');
    const delay = (duration / 1000).toFixed(2);
    const timeOut = duration + 1000;
    if (main) {
        const toast = document.createElement('div');
        // Auto remove toast
        const AutoRemoveId = setTimeout(function() {
            main.removeChild(toast)
        }, timeOut)
        // Remove Toast when clicked
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(AutoRemoveId);
            }
        };

        const icons = {
            success:'fas fa-check-circle',
            info:'fas fa-info-circle',
            warning:'fas fa-exclamation-triangle',
            error:'fas fa-exclamation-triangle'
        };
        const icon = icons[type];

        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut ease 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa fa-times" ></i>    
            </div>
        `;
        main.appendChild(toast);
    }
}

function ShowSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Chúc mừng bạn đã thành công trở thành một fullstack developer.',
        type: 'success',
        duration: 5000,
    });
};

function ShowErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Có lỗi xảy ra trên đường bạn trở thành fullstack developer. Hãy fig bux đi.',
        type: 'error',
        duration: 5000,
    }); 
}