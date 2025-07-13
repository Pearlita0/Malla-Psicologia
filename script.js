document.addEventListener('DOMContentLoaded', () => {
  const semesters = Array.from(document.querySelectorAll('.semester'));

  semesters.forEach((semester) => {
    const courses = Array.from(semester.querySelectorAll('.course'));

    courses.forEach((course, index) => {
      if (index !== 0) {
        lockCourse(course);
      } else {
        unlockCourse(course);
      }
      course.addEventListener('click', () => toggleCourse(course, index, courses));
    });
  });

  function lockCourse(course) {
    course.classList.add('locked');
    course.style.pointerEvents = 'none';
    course.style.opacity = '0.5';
    course.style.cursor = 'not-allowed';
  }

  function unlockCourse(course) {
    course.classList.remove('locked');
    course.style.pointerEvents = 'auto';
    course.style.opacity = '1';
    course.style.cursor = 'pointer';
  }

  function markCourse(course) {
    course.classList.add('completed');
    course.style.textDecoration = 'line-through';
    course.style.backgroundColor = '#d1ffd1';
  }

  function unmarkCourse(course) {
    course.classList.remove('completed');
    course.style.textDecoration = 'none';
    course.style.backgroundColor = 'white';
  }

  function toggleCourse(course, index, courses) {
    if (course.classList.contains('completed')) {
      // Desmarcar: desbloquear este y bloquear todos los siguientes
      unmarkCourse(course);
      lockFollowing(index + 1, courses);
    } else {
      // Marcar: desbloquear siguiente y marcar este
      markCourse(course);
      unlockNext(index + 1, courses);
    }
  }

  function unlockNext(index, courses) {
    if (index < courses.length) {
      unlockCourse(courses[index]);
    }
  }

  function lockFollowing(startIndex, courses) {
    for (let i = startIndex; i < courses.length; i++) {
      unmarkCourse(courses[i]);
      lockCourse(courses[i]);
    }
  }
});
