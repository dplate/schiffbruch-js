plugins {
    id("com.android.application")
}

android {
    namespace = "de.dplate.schiffbruch"
    compileSdk = 36

    defaultConfig {
        applicationId = "de.dplate.schiffbruch"
        minSdk = 21
        targetSdk = 36
        versionCode = 3
        versionName = "1.2"
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"))
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    buildFeatures {
        viewBinding = true
    }
}

dependencies {
    implementation("androidx.appcompat:appcompat:1.7.1")
    implementation(platform("org.jetbrains.kotlin:kotlin-bom:2.2.0"))
}

tasks.withType<JavaCompile>().configureEach {
    options.compilerArgs.add("-Xlint:deprecation")
}