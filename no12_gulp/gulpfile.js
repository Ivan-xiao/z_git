//���빤�߰� require('node_modules���Ӧģ��')
var gulp = require('gulp'), //���ذ�װgulp���õ��ĵط�
    less = require('gulp-less');

//����һ��testLess�����Զ����������ƣ�
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //��������Ե��ļ�
        .pipe(less()) //��������õ�ģ��
        .pipe(gulp.dest('src/css')); //������src/css������index.css
});

gulp.task('default',['testLess', 'elseTask']); //����Ĭ������ elseTaskΪ�������񣬸�ʾ��û�ж���elseTask����

//gulp.task(name[, deps], fn) ��������  name���������� deps�������������� fn���ص�����
//gulp.src(globs[, options]) ִ����������ļ�  globs��������ļ�·��(�ַ��������ַ�������)
//gulp.dest(path[, options]) ��������ļ�����·��





