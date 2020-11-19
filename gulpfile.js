import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

export const html = () => {
	return gulp.src('src/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist'));
};

export const less2css = () => {
	return gulp.src('src/styles/style.less')
		.pipe(less())
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gcmq())
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(gulp.dest('dist/styles'));
};

export const img = () => {
	return gulp.src('src/images/**/*')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 95, progressive: true}),
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: false},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest('dist/images'));
};

export default () => {
	browserSync.init({
		server: {
			baseDir: "./dist",
		},
		port: 3000,
		host: "192.168.0.2"
	});
	gulp.watch('src/*.html', html).on('change', browserSync.reload);
	gulp.watch('src/styles/**/*.(less|css)', less2css).on('change', browserSync.reload);
	gulp.watch('src/images/**/*', img).on('change', browserSync.reload);
}