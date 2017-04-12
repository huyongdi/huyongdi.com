let foo = '';

$.ajax({
    type: 'get',
    url: 'html/test1.html',
    async: false,
    success: function (resp) {
        foo = resp;
    }
});

export {foo};
