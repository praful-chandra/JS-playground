function defineWorkshop() {
  var currentEnrollment = [];
  var studentRecords = [];

  // PUBLIC_API's
  return {
    addStudent,
    enrollStudent,
    printCurrentEnrollment,
    enrollPaidStudents,
    remindUnpaidStudents,
  };

  function addStudent(id, name, paid) {
    const studentExists = studentRecords.find(findStudentById);
    if (studentExists) {
      return;
    }
    studentRecords.push({ id, name, paid });

    // ----------------------------------
    function findStudentById(record) {
      return record.id == id;
    }
  }

  function enrollStudent(id) {
    currentEnrollment.push(id);
  }

  function printCurrentEnrollment() {
    return printRecords(currentEnrollment);
  }

  function enrollPaidStudents() {
    currentEnrollment = paidStudentsToEnroll();
    printCurrentEnrollment();
  }

  function remindUnpaidStudents() {
    remindUnpaid(currentEnrollment);
  }

  //   **************** PRIVATE_METHODS ********************

  function getStudentFromId(studentId) {
    return studentRecords.find(matchId);

    // *************************
    function matchId(record) {
      return record.id == studentId;
    }
  }

  function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  }

  function printRecords(recordIds) {
    var records = recordIds.map(getStudentFromId);

    records.sort(sortByNameAsc);

    records.forEach(printRecord);
  }

  function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  }

  function needToEnroll(record) {
    return record.paid && !currentEnrollment.includes(record.id);
  }

  function getStudentId(record) {
    return record.id;
  }

  function paidStudentsToEnroll() {
    var recordsToEnroll = studentRecords.filter(needToEnroll);

    var idsToEnroll = recordsToEnroll.map(getStudentId);

    return [...currentEnrollment, ...idsToEnroll];
  }

  function notYetPaid(studentId) {
    var record = getStudentFromId(studentId);
    return !record.paid;
  }

  function remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(notYetPaid);

    printRecords(unpaidIds);
  }
}

var deepJs = defineWorkshop();

[
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
].forEach((rec) => {
  deepJs.addStudent(rec.id, rec.name, rec.paid);
});

[410, 105, 664, 375].forEach((uId) => deepJs.enrollStudent(uId));

deepJs.printCurrentEnrollment();
console.log("----");
deepJs.enrollPaidStudents();
console.log("----");
deepJs.remindUnpaidStudents();


/*  RESULT

	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/