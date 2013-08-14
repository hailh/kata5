/**
 * Created with IntelliJ IDEA.
 * User: Dell 3360
 * Date: 8/14/13
 * Time: 3:57 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.ux.ajax.SimManager.init({
    delay : 300
}).register(
    {
        '/app/data/url' : {
            stype : 'json',
            data  : [
                { First : 'X', Winner : 'X', Details : '1 2 3 4 5 6' },
                { First : 'O', Winner : 'X', Details : '5 7 9 1 3' },
                { First : 'O', Winner : 'O', Details : '2 4 8 2 7 1 6' },
                { First : 'X', Winner : '-', Details : '9 8 5 3 1 2 4' },
                { First : 'O', Winner : 'O', Details : '1 2 3 4 5 6 7 8 9' },
                { First : 'O', Winner : '-', Details : '1 4 7 9 2 5' }
            ]
        }
    }
);
