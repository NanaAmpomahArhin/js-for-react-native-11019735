function createUserProfiles(arrayOfNames,arrayOfModifiedNames){
    let id = 1;
    return arrayOfNames.map((userName,index) ={
        originalName: userName,
        modifiedName: arrayOfModifiedNames[index],
        id: id++
    })
}