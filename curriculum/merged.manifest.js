import { course, module, lesson, pptx, html } from 'cat/lib/course-manifest-dsl'

// test push
var manifest = course(1, false, { title: "Full Stack Software Engineering" }, [
    ...require('./01 Diving Into AI/primary.manifest').default.children
]);

export default manifest
