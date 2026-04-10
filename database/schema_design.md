# MongoDB Schema Design

## Collections

### 1. Users
- `_id`: ObjectId
- `name`: String
- `email`: String (Unique)
- `password`: String
- `age`: Number
- `gender`: String
- `medicalHistory`: Array of Strings
- `createdAt` / `updatedAt`: Timestamps

### 2. Doctors
- `_id`: ObjectId
- `name`: String
- `specialty`: String
- `hospital`: String
- `location`: String
- `contact`: String
- `availability`: Boolean
- `createdAt` / `updatedAt`: Timestamps

### 3. Histories (Symptom Log)
- `_id`: ObjectId
- `user`: ObjectId (Ref to Users)
- `symptoms`: Array of Strings
- `predictedDiseases`: Array of Objects
  - `name`: String
  - `severity`: Enum ['Low', 'Medium', 'High']
  - `confidence`: Number
- `actionSuggested`: String
- `createdAt` / `updatedAt`: Timestamps

### 4. Diseases (Admin - Conceptual)
- `_id`: ObjectId
- `name`: String
- `symptoms`: Array of Strings
- `description`: String
- `treatment`: String
- `severity`: String
